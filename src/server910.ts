
const express = require('express')
import {handler910} from "./handler910";
const app = express()
app.get('/910', handler910)
app.listen(3000, () => {})
        