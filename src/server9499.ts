
const express = require('express')
import {handler9499} from "./handler9499";
const app = express()
app.get('/9499', handler9499)
app.listen(3000, () => {})
        