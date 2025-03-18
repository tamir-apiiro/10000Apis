
const express = require('express')
import {handler9015} from "./handler9015";
const app = express()
app.get('/9015', handler9015)
app.listen(3000, () => {})
        