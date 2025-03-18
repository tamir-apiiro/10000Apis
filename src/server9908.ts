
const express = require('express')
import {handler9908} from "./handler9908";
const app = express()
app.get('/9908', handler9908)
app.listen(3000, () => {})
        