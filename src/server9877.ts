
const express = require('express')
import {handler9877} from "./handler9877";
const app = express()
app.get('/9877', handler9877)
app.listen(3000, () => {})
        