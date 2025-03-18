
const express = require('express')
import {handler7433} from "./handler7433";
const app = express()
app.get('/7433', handler7433)
app.listen(3000, () => {})
        