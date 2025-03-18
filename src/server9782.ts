
const express = require('express')
import {handler9782} from "./handler9782";
const app = express()
app.get('/9782', handler9782)
app.listen(3000, () => {})
        