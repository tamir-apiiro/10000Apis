
const express = require('express')
import {handler7440} from "./handler7440";
const app = express()
app.get('/7440', handler7440)
app.listen(3000, () => {})
        