
const express = require('express')
import {handler7910} from "./handler7910";
const app = express()
app.get('/7910', handler7910)
app.listen(3000, () => {})
        