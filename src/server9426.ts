
const express = require('express')
import {handler9426} from "./handler9426";
const app = express()
app.get('/9426', handler9426)
app.listen(3000, () => {})
        