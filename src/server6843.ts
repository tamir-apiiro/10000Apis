
const express = require('express')
import {handler6843} from "./handler6843";
const app = express()
app.get('/6843', handler6843)
app.listen(3000, () => {})
        