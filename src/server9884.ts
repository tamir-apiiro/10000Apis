
const express = require('express')
import {handler9884} from "./handler9884";
const app = express()
app.get('/9884', handler9884)
app.listen(3000, () => {})
        