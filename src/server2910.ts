
const express = require('express')
import {handler2910} from "./handler2910";
const app = express()
app.get('/2910', handler2910)
app.listen(3000, () => {})
        