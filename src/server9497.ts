
const express = require('express')
import {handler9497} from "./handler9497";
const app = express()
app.get('/9497', handler9497)
app.listen(3000, () => {})
        