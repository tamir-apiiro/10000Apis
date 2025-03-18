
const express = require('express')
import {handler3863} from "./handler3863";
const app = express()
app.get('/3863', handler3863)
app.listen(3000, () => {})
        