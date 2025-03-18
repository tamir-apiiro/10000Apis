
const express = require('express')
import {handler9945} from "./handler9945";
const app = express()
app.get('/9945', handler9945)
app.listen(3000, () => {})
        