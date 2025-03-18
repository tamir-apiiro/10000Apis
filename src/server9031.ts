
const express = require('express')
import {handler9031} from "./handler9031";
const app = express()
app.get('/9031', handler9031)
app.listen(3000, () => {})
        