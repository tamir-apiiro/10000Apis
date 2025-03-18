
const express = require('express')
import {handler9317} from "./handler9317";
const app = express()
app.get('/9317', handler9317)
app.listen(3000, () => {})
        