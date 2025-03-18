
const express = require('express')
import {handler9215} from "./handler9215";
const app = express()
app.get('/9215', handler9215)
app.listen(3000, () => {})
        