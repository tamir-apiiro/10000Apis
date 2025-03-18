
const express = require('express')
import {handler9024} from "./handler9024";
const app = express()
app.get('/9024', handler9024)
app.listen(3000, () => {})
        