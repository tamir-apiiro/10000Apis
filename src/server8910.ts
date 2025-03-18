
const express = require('express')
import {handler8910} from "./handler8910";
const app = express()
app.get('/8910', handler8910)
app.listen(3000, () => {})
        