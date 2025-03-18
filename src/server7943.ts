
const express = require('express')
import {handler7943} from "./handler7943";
const app = express()
app.get('/7943', handler7943)
app.listen(3000, () => {})
        