
const express = require('express')
import {handler9290} from "./handler9290";
const app = express()
app.get('/9290', handler9290)
app.listen(3000, () => {})
        