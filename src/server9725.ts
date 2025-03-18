
const express = require('express')
import {handler9725} from "./handler9725";
const app = express()
app.get('/9725', handler9725)
app.listen(3000, () => {})
        