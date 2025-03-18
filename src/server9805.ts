
const express = require('express')
import {handler9805} from "./handler9805";
const app = express()
app.get('/9805', handler9805)
app.listen(3000, () => {})
        