
const express = require('express')
import {handler3910} from "./handler3910";
const app = express()
app.get('/3910', handler3910)
app.listen(3000, () => {})
        