
const express = require('express')
import {handler9256} from "./handler9256";
const app = express()
app.get('/9256', handler9256)
app.listen(3000, () => {})
        