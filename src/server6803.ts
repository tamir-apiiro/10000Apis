
const express = require('express')
import {handler6803} from "./handler6803";
const app = express()
app.get('/6803', handler6803)
app.listen(3000, () => {})
        