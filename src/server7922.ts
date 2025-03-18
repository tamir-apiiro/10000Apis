
const express = require('express')
import {handler7922} from "./handler7922";
const app = express()
app.get('/7922', handler7922)
app.listen(3000, () => {})
        