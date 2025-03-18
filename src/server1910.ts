
const express = require('express')
import {handler1910} from "./handler1910";
const app = express()
app.get('/1910', handler1910)
app.listen(3000, () => {})
        