
const express = require('express')
import {handler9953} from "./handler9953";
const app = express()
app.get('/9953', handler9953)
app.listen(3000, () => {})
        