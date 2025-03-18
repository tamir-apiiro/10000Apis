
const express = require('express')
import {handler2794} from "./handler2794";
const app = express()
app.get('/2794', handler2794)
app.listen(3000, () => {})
        