
const express = require('express')
import {handler9974} from "./handler9974";
const app = express()
app.get('/9974', handler9974)
app.listen(3000, () => {})
        