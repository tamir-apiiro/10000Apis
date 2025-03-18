
const express = require('express')
import {handler9987} from "./handler9987";
const app = express()
app.get('/9987', handler9987)
app.listen(3000, () => {})
        