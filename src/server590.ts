
const express = require('express')
import {handler590} from "./handler590";
const app = express()
app.get('/590', handler590)
app.listen(3000, () => {})
        