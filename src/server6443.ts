
const express = require('express')
import {handler6443} from "./handler6443";
const app = express()
app.get('/6443', handler6443)
app.listen(3000, () => {})
        