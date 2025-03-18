
const express = require('express')
import {handler6910} from "./handler6910";
const app = express()
app.get('/6910', handler6910)
app.listen(3000, () => {})
        