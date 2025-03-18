
const express = require('express')
import {handler7590} from "./handler7590";
const app = express()
app.get('/7590', handler7590)
app.listen(3000, () => {})
        