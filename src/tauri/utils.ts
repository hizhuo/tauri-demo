import { platform } from '@tauri-apps/plugin-os';

/** 获取系统的 hosts 文件路径 */
export async function getHostsPath(): Promise<string> {
  const os = await platform();
  switch (os) {
    case "win32":
      return "C:\\Windows\\System32\\drivers\\etc\\hosts";
    case "macos":
    case "darwin":
    case "linux":
      return "/etc/hosts";
    //   return "/Users/cto/Downloads/.hello2.txt";
    default:
      throw new Error("Unsupported OS:"+os);
  }
}


import { readTextFile, writeTextFile, readDir, exists,BaseDirectory }  from '@tauri-apps/plugin-fs';

/** 获取 fragments 目录下的所有片段文件 */
export async function getFragments(): Promise<string[]> {
    console.log("getFragments",await exists('fragments', { baseDir: BaseDirectory.Download }));
    console.log("getFragments",await exists('fragments', { baseDir: BaseDirectory.Home }));
  const entries = await readDir("fragments", { baseDir: BaseDirectory.Download });
  return entries.map(entry => entry.name!);
}

/** 根据启用的片段生成最终的 hosts 文件内容 */
export async function generateHosts(enabledFragments: string[]): Promise<string> {
  let finalContent = "# Managed by Hosts Manager\n";
  for (const fragment of enabledFragments) {
    const content = await readTextFile(`fragments/${fragment}`, { baseDir: BaseDirectory.Download });
    finalContent += `\n# Fragment: ${fragment}\n${content}\n`;
  }
  return finalContent;
}

/** 写入最终的 hosts 文件 */
export async function writeHosts(content: string) {
    console.log("hostsPath",1);
  const hostsPath = await getHostsPath();
  console.log("hostsPath",hostsPath);
  await writeTextFile(hostsPath, content, { baseDir: BaseDirectory.Download ,create:true,append:true});
  await writeHostsWithSudo(content);
}

import { Command } from "@tauri-apps/plugin-shell";

/** 使用 sudo 写入 hosts 文件 */
export async function writeHostsWithSudo(content: string) {
  const hostsPath = await getHostsPath();
  const command = await Command.create("sh", [
    "-c",
    `echo '${content}' | sudo tee -a ${hostsPath} > /dev/null`
  ]);
 const output= await command.execute();
 console.log("output",output);
}
