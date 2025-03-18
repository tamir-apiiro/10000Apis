
const express = require('express')
import {handler9313} from "./handler9313";
const app = express()
app.get('/9313', handler9313)
app.listen(3000, () => {})
        