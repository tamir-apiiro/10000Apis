
const express = require('express')
import {handler6934} from "./handler6934";
const app = express()
app.get('/6934', handler6934)
app.listen(3000, () => {})
        