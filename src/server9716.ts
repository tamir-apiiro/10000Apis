
const express = require('express')
import {handler9716} from "./handler9716";
const app = express()
app.get('/9716', handler9716)
app.listen(3000, () => {})
        