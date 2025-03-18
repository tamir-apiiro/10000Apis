
const express = require('express')
import {handler6902} from "./handler6902";
const app = express()
app.get('/6902', handler6902)
app.listen(3000, () => {})
        