
const express = require('express')
import {handler9286} from "./handler9286";
const app = express()
app.get('/9286', handler9286)
app.listen(3000, () => {})
        