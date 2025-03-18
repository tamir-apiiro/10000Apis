
const express = require('express')
import {handler100} from "./handler100";
const app = express()
app.get('/100', handler100)
app.listen(3000, () => {})
        