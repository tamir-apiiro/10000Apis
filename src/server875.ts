
const express = require('express')
import {handler875} from "./handler875";
const app = express()
app.get('/875', handler875)
app.listen(3000, () => {})
        