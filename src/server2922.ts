
const express = require('express')
import {handler2922} from "./handler2922";
const app = express()
app.get('/2922', handler2922)
app.listen(3000, () => {})
        