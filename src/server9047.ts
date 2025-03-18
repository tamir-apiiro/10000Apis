
const express = require('express')
import {handler9047} from "./handler9047";
const app = express()
app.get('/9047', handler9047)
app.listen(3000, () => {})
        