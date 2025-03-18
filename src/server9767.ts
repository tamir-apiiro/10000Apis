
const express = require('express')
import {handler9767} from "./handler9767";
const app = express()
app.get('/9767', handler9767)
app.listen(3000, () => {})
        