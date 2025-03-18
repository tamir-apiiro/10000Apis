
const express = require('express')
import {handler9376} from "./handler9376";
const app = express()
app.get('/9376', handler9376)
app.listen(3000, () => {})
        