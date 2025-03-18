
const express = require('express')
import {handler782} from "./handler782";
const app = express()
app.get('/782', handler782)
app.listen(3000, () => {})
        