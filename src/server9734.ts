
const express = require('express')
import {handler9734} from "./handler9734";
const app = express()
app.get('/9734', handler9734)
app.listen(3000, () => {})
        