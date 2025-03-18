
const express = require('express')
import {handler9940} from "./handler9940";
const app = express()
app.get('/9940', handler9940)
app.listen(3000, () => {})
        